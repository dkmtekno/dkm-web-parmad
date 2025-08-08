import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";

const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function convertDescToHTML(text) {
  const safeText = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return safeText
    .split("\n\n") // Paragraf baru
    .map((p) => `<p>${p.replace(/\n/g, "<br />")}</p>`)
    .join("");
}

// Tambahkan ini
export async function GET() {
  const programs = await prisma.program.findMany({
    orderBy: { createdAt: "desc" },
  });

  return Response.json(programs);
}

// Parse form-data secara manual karena kita tidak pakai bodyParser
export async function POST(req) {
  const formData = await req.formData();

  const slug = formData.get("slug");
  const title = formData.get("title");
  const rawDesc = formData.get("desc");
  const shortDesc = formData.get("shortDesc");
  const summaryDesc = formData.get("summaryDesc") || rawDesc.substring(0, 300);
  const desc = convertDescToHTML(rawDesc);
  const date = new Date(formData.get("date"));
  const time = formData.get("time");
  const location = formData.get("location");

  // --- Upload Thumbnails ---
  let thumbnailUrl = "";
  const thumbnailFile = formData.get("thumbnails");
  if (thumbnailFile && thumbnailFile.size > 0) {
    const thumbBuffer = Buffer.from(await thumbnailFile.arrayBuffer());
    const thumbBase64 = thumbBuffer.toString("base64");

    const thumbRes = await cloudinary.uploader.upload(
      `data:${thumbnailFile.type};base64,${thumbBase64}`,
      {
        folder: "thumbnails",
      }
    );
    thumbnailUrl = thumbRes.secure_url;
  }

  // --- Upload Gallery ---
  const galleryUrls = [];
  const galleryFiles = formData.getAll("gallery");
  for (const file of galleryFiles) {
    if (!file || file.size === 0) continue;
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = buffer.toString("base64");

    const galleryRes = await cloudinary.uploader.upload(
      `data:${file.type};base64,${base64}`,
      {
        folder: "programs",
      }
    );
    galleryUrls.push(galleryRes.secure_url);
  }

  // --- Simpan ke DB ---
  const newProgram = await prisma.program.create({
    data: {
      slug,
      title,
      desc,
      shortDesc,
      summaryDesc,
      date,
      time,
      location,
      gallery: galleryUrls,
      thumbnails: thumbnailUrl,
    },
  });

  return Response.json(newProgram);
}

