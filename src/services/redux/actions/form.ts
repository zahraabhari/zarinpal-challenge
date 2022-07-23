export function submit_form(formValue: { [key: string]: any }) {
  return { type: "SUBMIT_FORM", value: formValue };
}
