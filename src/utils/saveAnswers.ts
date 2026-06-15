export async function saveAnswers(data: Record<string, unknown>) {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzirdOTnEeAweygyR9FnSVzzCgk1r0SHa83KWOlDJ_F3UOTQohqb8ocDK0WAI3k75v_/exec";

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}