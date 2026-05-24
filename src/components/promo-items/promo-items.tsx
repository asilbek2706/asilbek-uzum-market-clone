import PromoItem from "./promo-item"

const PromoItems = () => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <PromoItem image="	https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b" title="Onalar va bolalar uchun" />
      <PromoItem image="	https://static.uzum.uz/static/promo_images/67a3f24c-26d4-4fbb-adcf-ef3181707132" title="Futbol" />
      <PromoItem image="	https://static.uzum.uz/static/promo_images/4f28d325-14b1-4ad4-b839-eb4509492cdd" title="Zamonaviy bozor" />
      <PromoItem image="		https://static.uzum.uz/static/promo_images/31d71ba0-d184-41ee-888f-a369c3388179" title="Yozgi chegirmalar" />
    </div>
  )
}

export default PromoItems