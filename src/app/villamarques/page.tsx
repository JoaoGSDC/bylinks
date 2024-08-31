"use client";

import Layout from "@/components/Layout";
import { villamarques as client } from "./client";
import LinkButton from "@/components/LinkButton";
import { Logo } from "./styles";

const VillaMarques = () => {
  return (
    <Layout
      backgroundColor={client.backgroundColor}
      backgroundImage={client.backgroundImage}
      color={client.color}
      font={client.font}
    >
      {client.logo !== "" && (
        <Logo src={client.logo} alt={`${client.name} Logo`} />
      )}
      <h1>{client.name}</h1>
      {client.links.map((link) => (
        <LinkButton
          key={link.id}
          href={link.url}
          buttonBackgroundColor={client.buttonBackgroundColor}
          buttonColor={client.buttonColor}
        >
          {link.title}
        </LinkButton>
      ))}
    </Layout>
  );
};

export default VillaMarques;
