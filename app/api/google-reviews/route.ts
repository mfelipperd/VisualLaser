import { NextResponse } from "next/server";
import { getPlaceDetails, GooglePlacesConfigError, type PlaceReview } from "@/lib/google-places";

const PLACE_ID = "ChIJVycBkYGOpJIR67YIBR6Kyo4";

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: string;
  profile_photo_url?: string;
}

function toGoogleReview(review: PlaceReview): GoogleReview {
  const photoUri = review.authorAttribution?.photoUri;

  return {
    author_name: review.authorAttribution?.displayName || "Anônimo",
    rating: review.rating,
    text: review.originalText?.text || review.text?.text || "",
    time: review.relativePublishTimeDescription,
    ...(photoUri ? { profile_photo_url: photoUri } : {}),
  };
}

export async function GET() {
  try {
    const place = await getPlaceDetails(PLACE_ID);

    return NextResponse.json({
      success: true,
      rating: place.rating ?? 0,
      totalReviews: place.userRatingCount ?? 0,
      googleMapsUri: place.googleMapsUri,
      reviews: (place.reviews ?? []).map(toGoogleReview),
    });
  } catch (error) {
    if (error instanceof GooglePlacesConfigError) {
      return NextResponse.json(
        { success: false, reason: "not_configured" },
        { status: 503 }
      );
    }

    console.error("Erro ao buscar avaliações do Google Places:", error);
    return NextResponse.json(
      { success: false, reason: "upstream_error" },
      { status: 502 }
    );
  }
}
