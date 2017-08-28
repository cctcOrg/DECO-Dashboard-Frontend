export class FormField {
   variable: String;
   label: String;
   id: String;
   type: String;
   
   getVariable(variable) {
      return this.variable;
   }

   setVariable(variable, value) {
      this.variable = value;
   }
}