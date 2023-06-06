type ValidationRule = "required" | "email";

type ValidationRules = {
  [key: string]: ValidationRule[];
};

const createValidator = (rules: ValidationRules) => {
  return function (object: { [key: string]: any }): {
    [key: string]: string[];
  } {
    const errors: { [key: string]: string[] } = {};

    for (const key in rules) {
      for (const rule of rules[key]) {
        if (
          rule === "required" &&
          (object[key] === undefined || object[key] === "")
        ) {
          errors[key] = errors[key] || [];
          errors[key].push("The " + key + " field is required.");
        } else if (
          rule === "email" &&
          object[key] !== undefined &&
          object[key] !== ""
        ) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(object[key])) {
            errors[key] = errors[key] || [];
            errors[key].push(
              "The " + key + " field must be a valid email address."
            );
          }
        }
      }
    }

    return errors;
  };
};

export default createValidator;
