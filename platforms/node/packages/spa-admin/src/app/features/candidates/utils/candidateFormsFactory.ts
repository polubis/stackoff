import { FormControl, FormGroup, Validators } from "@angular/forms";

const addFormFields = {
  firstName: new FormControl("", Validators.required),
  lastName: new FormControl("", Validators.required),
  phoneNumber: new FormControl("", [
    Validators.required,
    Validators.minLength(8),
  ]),
  email: new FormControl("", Validators.email),
  position: new FormControl(""),
  wage: new FormControl(""),
  cvUrl: new FormControl(""),
  recommendationUrl: new FormControl(""),
};

export const createAddFormConfig = (): FormGroup =>
  new FormGroup(addFormFields);

export const createEditFormConfig = (): FormGroup =>
  new FormGroup({
    ...addFormFields,
    startRecruitmentDate: new FormControl(""),
    endRecruitmentDate: new FormControl(""),
  });
