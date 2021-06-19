\#{extends 'main.html' /} \#{set title:'Home' /}

# Validation samples

Learn how to use the [Play! validation framework](http://www.playframework.org/documentation/latest/validation). Each sample has it own controller and it own templates. Don't forget to take a look at the the _conf/messages_ file.

- # Sample 1

  This sample show very basic validation. All errors are displayed at the top of the form.

  \#{a @Sample1.index()}See the sample\#{/a}

- # Sample 2

  Same controller than for the 1st sample, but errors are displayed in side of each field.

  \#{a @Sample2.index()}See the sample\#{/a}

- # Sample 3

  In this sample, the controller uses Java annotation to define validation rules. Of course you can mix both.

  \#{a @Sample3.index()}See the sample\#{/a}

- # Sample 4

  This sample use a Java bean to handle the form data. Validation rules are added directly to the model object using annotations.

  \#{a @Sample4.index()}See the sample\#{/a}

- # Sample 5

  In this sample we use a more complex Java bean to handle the form data. It show you haw to use validations on nested objects.

  \#{a @Sample5.index()}See the sample\#{/a}

- # Sample 6

  Same sample than the 5th, but the template uses the \#{field /} tag the scope all field data (error, flash, name, ...) in a single part of the template.

  \#{a @Sample6.index()}See the sample\#{/a}

- # Sample 7

  This sample use a custom tag to integrate a JavaScript form validation library, reusing the validation rules defined on the server side. It's just a sample and you could integrate any other JavaScript validation library in the same way.

  \#{a @Sample7.index()}See the sample\#{/a}
