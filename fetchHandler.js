const apiKey = '4f47632c-3b3c-4b78-a101-86ff5a4e1bed';
const btcURL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=1';


const getBitcoinData = async () => {
  try {
    const response = await fetch(btcURL, {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const btcPriceData = () => {
  getBitcoinData()
  .then(bitcoinData => {
    console.log(bitcoinData)
    
  const description = bitcoinData.data['1'].description;

  const sentences = description.split('. ');

  function containsPriceKeywords(sentence) {
    const keywords = ['price', 'USD', 'dollars'];
    return keywords.some(keyword => sentence.toLowerCase().includes(keyword));
  }

  let price = null;

  for (const sentence of sentences) {
    if (containsPriceKeywords(sentence)) {
    
      const words = sentence.split(' ');
      for (const word of words) {
      
        if (/^\d+(\.\d{8})?$/.test(word.replace(/,/g, ''))) {
          price = word;
          break;
        }
      }
      if (price) {
        break;
      }
    }
  }

  if (price) {
    console.log(price); 
  } else {
    console.log("Price not found in description");
  }

    return price;
  })
  .catch(error => {
    console.error('failed to get btc data', error);
  });
};