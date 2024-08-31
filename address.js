document.addEventListener('DOMContentLoaded', function() {
    const pinCodeInput = document.getElementById('pin-code');
    const addressInput = document.getElementById('address');
    const cityInput = document.getElementById('city');
    const stateInput = document.getElementById('state');
    const countryInput = document.getElementById('country');
    
    pinCodeInput.addEventListener('change', function() {
        const pinCode = pinCodeInput.value;
        if (pinCode.length === 6) {
            fetchAddressFromPinCode(pinCode);
        }
    });

    function fetchAddressFromPinCode(pinCode) {
        // Replace with a real API endpoint
        fetch(`https://api.example.com/get-address?pinCode=${pinCode}`)
            .then(response => response.json())
            .then(data => {
                if (data.address) {
                    addressInput.value = data.address;
                    cityInput.value = data.city;
                    stateInput.value = data.state;
                    countryInput.value = data.country;
                } else {
                    alert('Address not found for the entered pin code.');
                }
            })
            .catch(error => {
                console.error('Error fetching address:', error);
            });
    }

    function fetchCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchAddressFromCoordinates(lat, lon);
            }, function(error) {
                console.error('Error getting location:', error);
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

    function fetchAddressFromCoordinates(lat, lon) {
        // Replace with a real API endpoint
        fetch(`https://api.example.com/get-address-from-coordinates?lat=${lat}&lon=${lon}`)
            .then(response => response.json())
            .then(data => {
                if (data.address) {
                    addressInput.value = data.address;
                    cityInput.value = data.city;
                    stateInput.value = data.state;
                    countryInput.value = data.country;
                } else {
                    alert('Address not found for the current location.');
                }
            })
            .catch(error => {
                console.error('Error fetching address from coordinates:', error);
            });
    }

    // Automatically fetch current location when the page loads
    fetchCurrentLocation();
});
