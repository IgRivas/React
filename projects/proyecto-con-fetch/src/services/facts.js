const CAT_ENDPOINT_RANDOM_FACTS = 'https://catfact.ninja/fact'

export   const getRandomFact = async () => {
    // Fetch a random fact from the cat API
    const response = await fetch(CAT_ENDPOINT_RANDOM_FACTS)
    const data = await response.json()
    const { fact } = data
    return fact
  }