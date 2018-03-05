import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }

  fromValuesToPayload(values): Array<{field: string, value: string|number|Array<string|number>}> {
    const payload = [];
    for (const i in values) {
      if (values.hasOwnProperty(i)) {
        payload.push({
          'field': i,
          'value': values[i]
        });
      }
    }
    return payload;
  }

  fromValuesToFormData(values): FormData {
    const formData: FormData = new FormData();
    const fields = [];
    for (const i in values) {
      if (values.hasOwnProperty(i)) {
        if (values[i] instanceof File) {
          formData.append(`${i}`, values[i]);
        } else {
          fields.push({
            'field': i,
            'value': values[i]
          });
        }
      }
    }
    formData.append('fields', JSON.stringify(fields));
    return formData;
  }

}
