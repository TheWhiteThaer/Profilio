import { AssignPropertyToCSS, Get_Property } from "../Utils.js";

export function Change_Style(Element, Property, Value) {
  try {
    Element.style[Property] = Value;
  } catch (error) {
    console.error(error);
  }
}

export function Edit_Style(Element, EditSheet) {
  let Edits = EditSheet.split(";");
  // console.log(`Edited Sheet For ${Element.tagName}:`);

  for (let index = 0; index < Edits.length - 1; index++) {
    const EditeSheetsNoSpaces = Edits[index].trim(); //remove whitespaces

    let Value = EditeSheetsNoSpaces.split(":")[1];

    let Property = Get_Property(EditeSheetsNoSpaces);

    Element.style[Property] = Value;

    AssignPropertyToCSS(Element, Property, Value);
    // console.log(Property + " : " + Value);
  }
}

export function Set_Position(Element, X, Y) {
  Change_Style(Element, "position", "relative");
  Change_Style(Element, "left", `${X}px`);
  Change_Style(Element, "top", `${Y}px`);
}

export function Make_Element(Type, Attributes, Text, Id) {
  Element = document.createElement(Type);
  if (Id) {
    Element.id = Id;
  }
  if (Text) {
    Element.appendChild(document.createTextNode(Text));
  }
  if (Attributes) {
    for (const Attribute of Attributes) {
      Element.setAttribute(Attribute.Name, Attribute.Value);
    }
  }
  return Element;
}

export function Add(Element) {
  if (Element) {
    document.body.append(Element);
  }
}

export function getEl(id) {
  return document.getElementById(id);
}
