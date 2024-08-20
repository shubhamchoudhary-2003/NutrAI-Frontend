import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const imageFile = formData.get("image");

  if (!imageFile) {
    return NextResponse.json({ error: "Image is required" }, { status: 400 });
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to get nutritional data" }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error posting to external API:", error);
    return NextResponse.json({ error: "Error processing the request" }, { status: 500 });
  }
}
