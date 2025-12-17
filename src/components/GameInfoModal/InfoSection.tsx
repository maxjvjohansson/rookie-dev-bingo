import { Section, SectionTitle, List } from "./styles";
import { InfoItem } from "./InfoItem";

interface Props {
  title: string;
  items: string[];
}

export function InfoSection({ title, items }: Props) {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <List>
        {items.map((text) => (
          <InfoItem key={text} text={text} />
        ))}
      </List>
    </Section>
  );
}
