"use server"

export async function sendMessageAction(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return {
      success: false,
      name,
      email,
      message,
      error: "Name, Email, and Message are required",
    }
  }

  // TODO: Trigger email with form data

  return {
    success: true,
  }
}
