export function parseSpaceSize(size: string | [string, string]): string {
  function parseSpaceSizeValue(value: string): string {
    switch (value) {
      case "small":
        return "4px";
      case "middle":
        return "8px";
      case "large":
        return "12px";
    }
    return parsePx(value);
  }
  if (Array.isArray(size)) {
    return size.map((value) => parseSpaceSizeValue(value)).join(" ");
  } else {
    return parseSpaceSizeValue(size);
  }
}

export function parseIconSize(value: string): string {
  switch (value) {
    case "small":
      return "30px";
    case "middle":
      return "36px";
    case "large":
      return "42px";
  }
  return parsePx(value);
}

export function parsePx(value: string) {
  if (value.endsWith("px")) {
    return value;
  } else {
    return `${value}px`;
  }
}

export function parseDeg(value: string) {
  if (value.endsWith("deg")) {
    return value;
  } else {
    return `${value}deg`;
  }
}
