function ValidationError(errors: unknown) {
  return { status: 400, message: "Validation error", errors: errors };
}

export default ValidationError;
