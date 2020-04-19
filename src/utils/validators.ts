export default class Validator {

  requiredField = (value: string) => {
    if (value) return undefined;
    return 'Field is Required'
  }

  minLengthCreator = (minLength: number) => (value: string) => {
    if (value.length < minLength) return `Min length is ${minLength} symbols`
    return  undefined
  }
}
