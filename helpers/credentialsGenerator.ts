export function generateUniqueEmail(baseEmail: string = 'user@example.com'): string {
  return baseEmail.replace('@', `.${Date.now().toString(36)}@`);
}

export function generateUniquePassword(): string {
  const randomChars = Math.random().toString(36).slice(-6);
  return `Test${randomChars}`;
}
