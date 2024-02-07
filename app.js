//const project = ref(null)
//const complete = ref([])
async function fetchData() {
  try {
    const res = await fetch('https://scheduflow-json-server.fly.dev/schedules')
    const project = await res.json()
	   console.log(project)
    return project;
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

async function fetchDataMembers() {
  try {
    const res = await fetch('https://scheduflow-json-server.fly.dev/members')
    const project = await res.json()
           console.log(project)
    return project;
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
//fetchData()
module.exports = {
	fetchData,
	fetchDataMembers
};
