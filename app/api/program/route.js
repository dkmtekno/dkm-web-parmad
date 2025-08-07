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
  const desc = convertDescToHTML(rawDesc);
  const date = new Date(formData.get("date"));
  const time = formData.get("time");
  const location = formData.get("location");

  const files = formData.getAll("gallery"); // multiple files
  const galleryUrls = [];

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString("base64");

    const uploadRes = await cloudinary.uploader.upload(
      `data:${file.type};base64,${base64}`,
      {
        folder: "programs",
      }
    );
    galleryUrls.push(uploadRes.secure_url);
  }

  const newProgram = await prisma.program.create({
    data: {
      slug,
      title,
      desc,
      shortDesc,
      date,
      time,
      location,
      gallery: galleryUrls,
    },
  });

  return Response.json(newProgram);
}
