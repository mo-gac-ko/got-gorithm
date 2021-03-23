function solution(new_id) {
  let id_validation = new_id
    .toLowerCase()
    .replace(/[^\a-z0-9-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.+|\.$/g, "");

  if (id_validation.length === 0) {
    id_validation = "a";
  }

  if (id_validation.length > 15) {
    id_validation = id_validation.substring(0, 15).replace(/\.$/g, "");
  }

  let lastString = id_validation.substring(id_validation.length - 1);
  if (id_validation.length <= 2) {
    for (let i = id_validation.length; i < 3; i++) {
      id_validation = id_validation + lastString;
    }
  }

  return id_validation;
}
