"use server";

import { stepFourSchema } from "@/src/shema";
import { AddDealRoutes, FormErrors } from "@/src/types/form-type";
import { redirect } from "next/navigation";

export const stepFourFormAction = async (
  prevState: FormErrors | undefined,
  formData: FormData
): Promise<FormErrors | undefined> => {
  const data = Object.fromEntries(formData.entries());
  const validated = stepFourSchema.safeParse(data);

  if (!validated.success) {
    const errors = validated.error.issues.reduce((acc: FormErrors, issue) => {
      const path = issue.path[0] as string;
      acc[path] = issue.message;
      return acc;
    }, {} as FormErrors);

    return errors;
  }

  redirect(AddDealRoutes.RECOMMENDATIONS_AUTOMATISATION);
};
