import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  to: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Creating & Developing Contract Project for EVM',
    to: '/docs/Automated workflow/EVM Contract/Create Project for EVM',
    description: (
      <>
        Want to quickly build more cool code and demos in the Ethereum ecosystem? Now learn how to use Hamster to quickly create and develop projects based on the EVM and Solidity language here. 
      </>
    ),
  },
];

function Feature({ title, to, description }: FeatureItem) {
  return (
    <article className="card margin-bottom--lg padding--md cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">
        <Link to={to}>
        <div className="text--left padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        </Link>
    </article>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
