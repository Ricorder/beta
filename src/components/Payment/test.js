const date = '2022-12-15'

console.log(date
    .slice(0, 10)
    .replaceAll('-', '.')
    .replace(/(....)(.)(..)(.)(..)/, '$5$2$3$4$1'))