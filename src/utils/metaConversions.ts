import crypto from 'crypto';

const META_API_URL = 'https://graph.facebook.com/v22.0/1742514426668018/events';
const ACCESS_TOKEN = 'EAAJGHcZAXMKQBO531Efb6TJjlQB1UwWy6SZAZBmbyZCUg7XM7zad9GyCNtPRQXZAbLdtWLnI7f90Nn54uKucznrABcJEexMLgUWeAeOq0EVbEc3eQghJZCZCuYqhaZC0sAS8pJPGautJRGZA1eQgjCEoSBmm0JUKkZBBRgQVVg9hbWBHgiLeOoeOto92vIepBSSaFiqAZDZD';

interface UserData {
  phone: string;
  firstName: string;
  lastName: string;
}

const hashData = (data: string): string => {
  return crypto.createHash('sha256').update(data).digest('hex');
};

export const sendMetaConversion = async (userData: UserData): Promise<void> => {
  const { phone, firstName, lastName } = userData;

  const payload = {
    data: [{
      event_name: "Lead",
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      user_data: {
        ph: [hashData(`55${phone.replace(/\D/g, '')}`)],
        fn: [hashData(firstName)],
        ln: [hashData(lastName)],
        country: ['885036a0da3dff3c3e05bc79bf49382b12bc5098514ed57ce0875aba1aa2c40d'], // hashed 'br'
        fbc: null,
        fbp: null
      },
      attribution_data: {
        campaign_id: null,
        adset_id: null,
        ad_id: null,
        attribution_share: 0.5
      },
      original_event_data: {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000)
      }
    }]
  };

  try {
    const response = await fetch(`${META_API_URL}?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to send Meta conversion');
    }
  } catch (error) {
    console.error('Error sending Meta conversion:', error);
  }
};
