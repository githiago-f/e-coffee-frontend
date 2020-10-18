import React from 'react';
import { Translator } from 'locale';

export const Shops = () => {
  // const renderList = useMemo(() => {
  //   return cards.map((card, index) => (
  //     <div key={index} className="col-12 col-sm-6 col-md-3">
  //       <Card card={card} />
  //     </div>
  //   ));
  // }, [ cards ]);

  return (
    <div className="content">
      <div className="row">
        <div className="col">
          <h2 className="text-center">
            {Translator.i18n.translate('shops.title')}
          </h2>
          <h3 className="text-center">
            <small>{Translator.i18n.translate('shops.subtitle')}</small>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={()=>{
            Translator.selectLang('pt-br');
          }}>Change Language</button>
        </div>
      </div>
    </div>
  );
};
