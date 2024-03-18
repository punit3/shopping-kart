// Function to handle API responses
export const handleApiResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! Status: ${response.status}, ${errorText}`);
  }

  try {
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error('Error parsing JSON response:', error);
    throw new Error('Error parsing JSON response');
  }
};

// Function to make a GET request to the API
export const getApiData = async (url) => {
  try {
    const response = await fetch(url);
    return handleApiResponse(response);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Error fetching data');
  }
};

// Function to make a POST request to the API
export const postApiData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleApiResponse(response);
  } catch (error) {
    console.error('Error posting data:', error);
    throw new Error('Error posting data');
  }
};
