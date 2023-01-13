import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

type Item = {
  title: string;
  to: string;
};

const ItemList: Item[] = [
  {
    title: 'Start a Contract project',
    to: '/docs/GetStarted/contract_project',
  },
  {
    title: 'Start a Frontend project',
    to: '/docs/GetStarted/frontend_project',
  },
];

function Item({ title, to }: Item) {
  return (
    <div className={clsx('col col--6')}>
      <Link
        className="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
        to={to}>
        <div className="text--center padding-horiz--md ">
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
}

export default function Quickstart(): JSX.Element {
  return (
    <section className={styles.quickstart}>
      {ItemList.map((props, idx) => (
        <Item key={idx} {...props} />
      ))}
    </section>
  );
}
