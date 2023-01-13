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
    title: 'Contract Template',
    to: '/docs/intro',
    description: (
      <>
        This feature allows developers to easily create and deploy smart contracts
        using pre-defined templates, reducing the time and effort required to create
        a new contract from scratch.
      </>
    ),
  },
  {
    title: 'Code Security and Quality Checks',
    to: '/docs/user',
    description: (
      <>
        This feature automatically checks the code for potential vulnerabilities and bugs,
        ensuring that the smart contract is secure and functions as intended.
      </>
    ),
  },
  {
    title: 'Customization of R & D Pipelines',
    to: '/docs/template',
    description: (
      <>
        This feature allows developers to customize the pipeline for their specific needs,
        including managing and deploying smart contracts in a decentralized way.
      </>
    ),
  },
  {
    title: 'Rapid Deployment',
    to: '/docs/template',
    description: (
      <>
        This feature streamlines the process of deploying smart contracts to a blockchain
        network, allowing for faster development and deployment times.
      </>
    ),
  },
  {
    title: 'Teamwork Coordination',
    to: '/docs/template',
    description: (
      <>
        This feature provides tools for coordinating and communicating with team members,
        increasing efficiency and productivity.
      </>
    ),
  },
  {
    title: 'Intelligent Operation and Maintenance',
    to: '/docs/template',
    description: (
      <>
        This feature allows for the automation of routine tasks and monitoring,
        reducing the time and effort required to maintain the DApp.
      </>
    ),
  },
  {
    title: 'Digital Monitoring',
    to: '/docs/template',
    description: (
      <>
        This feature provides real-time monitoring of smart contract execution and performance,
        allowing for troubleshooting and auditing.
      </>
    ),
  },
  {
    title: 'Developer Tools Integration',
    to: '/docs/template',
    description: (
      <>
        This feature allows developers to streamline their development process and increase
        efficiency by selecting the tools that best suit their needs and integrating them into the function.
      </>
    ),
  },
  {
    title: 'Automated Task Flow',
    to: '/docs/template',
    description: (
      <>
        This feature automates routine tasks, such as testing and deployment,
        to optimize the overall development process.
      </>
    ),
  },
];

function Feature({ title, to, description }: FeatureItem) {
  return (
    <article className="card margin-bottom--lg padding--md cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">
      <Link
        to={to}>
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
