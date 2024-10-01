export default function guardrail(mathFunction) {
  const message = 'Guardrail was processed';
  try {
    const result = mathFunction();
    return [result, message];
  } catch (err) {
    return [`Error: ${err.message}`, message];
  }
}
