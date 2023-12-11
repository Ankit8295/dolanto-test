"use server";
import { createClient } from "./supabase/server";
export const saveContactData = async (InquiryData: any, fileData: FormData) => {
  const supabase = await createClient();
  const file = fileData.get("file") as File;
  let fileUrl = "";

  if (file.size > 0) {
    const { data: uploadData, error } = await supabase.storage
      .from("dolanto-homepage")
      .upload("/inquiries/" + file.name, file);
    if (uploadData) {
      const {
        data: { publicUrl },
      } = supabase.storage
        .from("dolanto-homepage")
        .getPublicUrl(uploadData?.path);
      fileUrl = publicUrl || "";
    }
  }
  const { data, error: updatingError } = await supabase
    .from("contact-us")
    .insert({
      ...InquiryData,
      file: fileUrl || null,
    })
    .select();
  if (data) {
    return JSON.stringify({
      message: "Success",
      status: 200,
    });
  }
  return JSON.stringify({
    message: updatingError.message.split(":")[0],
    status: 500,
  });
};
