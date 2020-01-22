export class ErrorService {
  // Wanted made all methods as static bcz these are pure function,
  // so that we can avoid injecting into contructre were where we are using it --Anil

  // Add any kind of validation here to have mre control --Anil
  // Currentlly adding two static methods here --Anil
  // This helps in scalable in terms of handling the validation in the applications --Anil

    static errorMessage(propName: string, controlField?: any, fieldName?: string) {
      const constants = {
        required: `Field ${fieldName} is Required`,
        errorEmailAddress: 'Provided value does not meet the email standards',
        minlength: `Minimum length ${controlField.requiredLength}`
      };
      return constants[propName];
    }

    static emailValidator(control) {
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        return null;
      } else {
        return { errorEmailAddress: true };
      }
    }

  }
