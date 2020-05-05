
// drivers = ['Bob', 'Mike', 'Sally']
 function findMatching(drivers, string) {
  return drivers.filter(d => d.toUpperCase() === string.toUpperCase())
 }

 function fuzzyMatch(drivers, string) {
  return drivers.filter(d => d.slice(0, string.length) === string)
 }

 // drivers = [{name: 'Bob'}, ... ]
 function matchName(drivers, string) {
  return drivers.filter(d => d.name === string)
 }
