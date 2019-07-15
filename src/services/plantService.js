import tokenService from '../services/tokenService';

// index
export function getPlants() {
    return fetch(`/api/plants`).then(function(res) {
        return res.json();
    })
}
  
// show
export function getPlant(id) {
    return fetch(`/api/plants/${id}`).then(function(res) {
        return res.json();
    })
}
  
// create
export function createPlant(plant) {
    return fetch('/api/plants', {
        method: 'POST',
        body: JSON.stringify({
            name: plant.name
        }),
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
}
  
// edit
export function editPlant(plant) {
    return fetch(`/api/plants/${plant.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name: plant.name,
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
}
  
// delete
export function deletePlant(id) {
    return fetch(`/api/plants/${id}`, {
        method: 'delete'
    }).then(function(res) {
        return res.json()
    });
}

// increase or decrease water
export function increaseWater(id, type) {
    var type = type === "decreaseWater" ? "decreaseWater" : "increaseWater";
    return fetch(`/api/plants/${id}/${type}`, {
      method: 'PUT',
      body: JSON.stringify({
        waterSum: 1
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(function(res) {
        return res.json()
    });
  }