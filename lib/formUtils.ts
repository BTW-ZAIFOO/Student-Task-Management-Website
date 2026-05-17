// Form utilities for validation and submission handling
export interface FormField {
  name: string;
  type: 'email' | 'password' | 'text' | 'textarea' | 'select';
  label: string;
  required?: boolean;
  minLength?: number;
  pattern?: RegExp;
}

export interface FormData {
  [key: string]: string;
}

export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validatePassword(password: string, minLength = 6): boolean {
  return password.length >= minLength;
}

export function validateForm(data: FormData, fields: FormField[]): { valid: boolean; errors: { [key: string]: string } } {
  const errors: { [key: string]: string } = {};

  fields.forEach((field) => {
    const value = data[field.name];

    if (field.required && !value) {
      errors[field.name] = `${field.label} is required`;
      return;
    }

    if (value) {
      if (field.type === 'email' && !validateEmail(value)) {
        errors[field.name] = 'Please enter a valid email';
      } else if (field.minLength && value.length < field.minLength) {
        errors[field.name] = `${field.label} must be at least ${field.minLength} characters`;
      } else if (field.pattern && !field.pattern.test(value)) {
        errors[field.name] = `${field.label} format is invalid`;
      }
    }
  });

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

// Local storage helper for demo purposes
export function saveFormSubmission(formName: string, data: FormData) {
  const key = `form_${formName}_${Date.now()}`;
  localStorage.setItem(key, JSON.stringify({ ...data, timestamp: new Date().toISOString() }));
}

export function getFormSubmissions(formName: string): (FormData & { timestamp: string })[] {
  const submissions = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(`form_${formName}_`)) {
      const data = localStorage.getItem(key);
      if (data) submissions.push(JSON.parse(data));
    }
  }
  return submissions;
}
