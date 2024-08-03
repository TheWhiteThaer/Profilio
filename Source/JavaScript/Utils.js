export let VectorProperties = [
  { Name: "Scale", Properties: ["width", "height"] },
  { Name: "Position", Properties: ["left", "top"] },
];

export let SingleVectorProperty = [
  { Name: "x", Properties: "left" },
  { Name: "y", Properties: "top" },
  { Name: "Scale.x", Properties: "width" },
  { Name: "Scale.y", Properties: "height" },
];

export function GetVectorsValue(Value) {
  return Value.split("(").pop(0).split(")").slice(0, 1)[0].split(",");
}

export function AssignPropertyToCSS(Element, Property, Value) {
  for (const Vector of VectorProperties) {
    if (Property == Vector.Name) {
      for (let index = 0; index < VectorProperties.length; index++) {
        Element.style[Vector.Properties[index]] = `${
          GetVectorsValue(Value)[index]
        }`;
      }
    }
  }

  for (const SingleVector of SingleVectorProperty) {
    if (Property == SingleVector.Name) {
      Element.style[SingleVector.Properties] = Value;
    }
  }

  // setting custom props
  switch (Property) {
    case "Position":
      Element.style.position = "relative";
  }
}

export function Get_Property(EditSheet) {
  let Property = "";
  let CSSProperties = EditSheet.split(":")[0].split("-");
  for (let jndex = 0; jndex < CSSProperties.length; jndex++) {
    if (CSSProperties.length == 1) {
      Property = CSSProperties[jndex];
    }
    if (jndex < CSSProperties.length - 1) {
      Property =
        CSSProperties[jndex] +
        CSSProperties[jndex + 1].charAt(0).toUpperCase() +
        CSSProperties[jndex + 1].slice(1);
    }
    return Property;
  }
}

export function getOffset(Element) {
  const Rect = Element.getBoundingClientRect();
  return {
    x: Rect.left + window.scrollX,
    y: Rect.top + window.scrollY,
  };
}
