import vine from "@vinejs/vine";
import { CustomErrorReporter } from "./CustomErrorReporter.js";


// Register the custom error reporter
vine.errorReporter = () => new CustomErrorReporter();

export const registerSchema = vine.object({
    name: vine.string().minLength(2).maxLength(150),
    email: vine.string().email(),
    password: vine.string().minLength(6).maxLength(100).confirmed(),
  });