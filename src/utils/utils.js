import Select from "../components/common/select";

export function renderSelect(name, label, genres, genre) {
  <Select
    name={name}
    label={label}
    options={genres}
    onChange={(e) => e.target.value(genre)}
    value={genre}
  />;
}
