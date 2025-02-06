export function html(
  strings: TemplateStringsArray,
  ...values: (string | number)[]
): string {
  return strings.reduce(
    (result, str, i) => result + str + (values[i] || ""),
    ""
  );
}
