"use server";

import { stepOneSchema } from "@/src/shema";
import { AddDealRoutes, FormErrors } from "@/src/types/form-type";
import { redirect } from "next/navigation";

export const stepOneFormAction = async (
  prevState: FormErrors | undefined,
  formData: FormData
): Promise<FormErrors | undefined> => {
  const data = Object.fromEntries(formData.entries());
  const validated = stepOneSchema.safeParse(data);

  if (!validated.success) {
    const errors = validated.error.issues.reduce((acc: FormErrors, issue) => {
      const path = issue.path[0] as string;
      acc[path] = issue.message; // UNE chaîne, pas un tableau
      return acc;
    }, {} as FormErrors);

    return errors;
  }

  // redirige après succès
  redirect(AddDealRoutes.NIVEAU_AUTOMATISATION);
};
