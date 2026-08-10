const PLACES_API_BASE = "https://places.googleapis.com/v1/places";
const FIELD_MASK = "id,rating,userRatingCount,googleMapsUri,reviews";

export interface PlaceReviewAuthor {
  displayName: string;
  uri?: string;
  photoUri?: string;
}

export interface PlaceReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text?: { text: string; languageCode: string };
  originalText?: { text: string; languageCode: string };
  authorAttribution?: PlaceReviewAuthor;
  publishTime: string;
}

export interface PlaceDetails {
  id: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlaceReview[];
}

export class GooglePlacesConfigError extends Error {}

export async function getPlaceDetails(placeId: string): Promise<PlaceDetails> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    throw new GooglePlacesConfigError("GOOGLE_PLACES_API_KEY não configurada");
  }

  const response = await fetch(`${PLACES_API_BASE}/${placeId}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": FIELD_MASK,
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Places API respondeu ${response.status}: ${body}`);
  }

  return response.json();
}
