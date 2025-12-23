import { UserProfile } from "@/types/userProfileTypes";
import { formatDate } from "@/utils/formatDate";
import { StatsSection, StatItem } from "./styles";

interface Props {
  profile: UserProfile;
}

export default function ProfileStats({ profile }: Props) {
  return (
    <StatsSection>
      <h3>Your stats</h3>

      <StatItem>
        <strong>Bingos:</strong> {profile.bingo_count}
      </StatItem>

      <StatItem>
        <strong>Checked tiles:</strong> {profile.checked_count}
      </StatItem>

      {profile.distance_to_bingo !== null && (
        <StatItem>
          <strong>Current state:</strong>{" "}
          {profile.distance_to_bingo === 0
            ? "🎉 Bingo!"
            : `${profile.distance_to_bingo} tiles left 😬`}
        </StatItem>
      )}

      {profile.last_bingo && (
        <StatItem>
          <strong>Last bingo:</strong> {formatDate(profile.last_bingo)}
        </StatItem>
      )}
    </StatsSection>
  );
}
