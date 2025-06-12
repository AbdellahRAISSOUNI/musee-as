"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface SiteMapItem {
  title: string;
  path: string;
  children?: SiteMapItem[];
}

const siteMap: SiteMapItem[] = [
  {
    title: "Accueil",
    path: "/",
  },
  {
    title: "Fondation",
    path: "/fondation",
    children: [
      {
        title: "Le Projet de Musée",
        path: "/fondation/projet-musee",
      },
      {
        title: "Ils Parlent de Nous",
        path: "/fondation/presse",
      }
    ]
  },
  {
    title: "Collections & Expositions",
    path: "/collections-expositions",
    children: [
      {
        title: "Collections Permanentes",
        path: "/collections-expositions/collections-permanentes",
        children: [
          {
            title: "Objets de Collection (Items dynamiques)",
            path: "/collections-expositions/collections-permanentes/[itemId]",
          }
        ]
      },
      {
        title: "Expositions Temporaires",
        path: "/collections-expositions/expositions-temporaires",
        children: [
          {
            title: "Expositions (Items dynamiques)",
            path: "/collections-expositions/expositions-temporaires/[exhibitionId]",
          }
        ]
      }
    ]
  },
  {
    title: "Visites, Ateliers & Activités",
    path: "/visites-ateliers-activites",
    children: [
      {
        title: "Actualités",
        path: "/visites-ateliers-activites/actualites",
        children: [
          {
            title: "Détails Actualité (Dynamique)",
            path: "/visites-ateliers-activites/actualites/[newsId]",
          }
        ]
      },
      {
        title: "Ateliers Artistiques",
        path: "/visites-ateliers-activites/ateliers-artistiques",
      },
      {
        title: "Rencontres",
        path: "/visites-ateliers-activites/rencontres",
      },
      {
        title: "Visites Guidées",
        path: "/visites-ateliers-activites/visites-guidees",
      },
      {
        title: "Privatisation",
        path: "/visites-ateliers-activites/privatisation",
      }
    ]
  },
  {
    title: "Jeune Public",
    path: "/jeune-public",
    children: [
      {
        title: "Visites Scolaires Guidées",
        path: "/jeune-public/visites-scolaires",
      },
      {
        title: "Ateliers Pédagogiques",
        path: "/jeune-public/ateliers-pedagogiques",
      }
    ]
  },
  {
    title: "Infos Pratiques",
    path: "/infos-pratiques",
    children: [
      {
        title: "Horaires, Tarifs et Accès",
        path: "/infos-pratiques/horaires-tarifs-acces",
      },
      {
        title: "Le Café du Musée",
        path: "/infos-pratiques/cafe-musee",
      },
      {
        title: "Le Comptoir de Vente",
        path: "/infos-pratiques/comptoir-vente",
      },
      {
        title: "Contact",
        path: "/infos-pratiques/contact",
      }
    ]
  },
  {
    title: "Tempus Fugit",
    path: "/tempus-fugit",
  }
];

const MapItem: React.FC<{ item: SiteMapItem; level: number }> = ({ item, level }) => {
  const [isOpen, setIsOpen] = useState(level < 1);
  
  const toggleOpen = () => {
    if (item.children?.length) {
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <div className="mb-1">
      <div 
        className={`flex items-center py-1 pl-${level * 4} ${level === 0 ? 'text-lg font-medium' : 'text-base'}`}
        onClick={toggleOpen}
      >
        {item.children?.length ? (
          <span className="mr-2 text-accent-gold cursor-pointer">
            {isOpen ? '▼' : '►'}
          </span>
        ) : (
          <span className="mr-2 text-gray-500">•</span>
        )}
        
        <Link 
          href={item.path}
          className={`${level === 0 ? 'text-premium-white' : 'text-soft-white'} hover:text-accent-gold transition-colors`}
        >
          {item.title}
        </Link>
        
        <span className="ml-2 text-gray-500 text-sm">{item.path}</span>
      </div>
      
      {isOpen && item.children?.length && (
        <div className="ml-4">
          {item.children.map((child, index) => (
            <MapItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectMap = () => {
  return (
    <div className="bg-charcoal p-6 rounded-lg">
      <h2 className="font-bodoni-regular text-2xl text-premium-white mb-4">
        Plan du Site
      </h2>
      
      <div className="overflow-auto max-h-[70vh]">
        {siteMap.map((item, index) => (
          <MapItem key={index} item={item} level={0} />
        ))}
      </div>
    </div>
  );
};

export default ProjectMap; 