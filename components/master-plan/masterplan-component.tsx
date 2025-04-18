import Image from "next/image";

const MasterplanDesktop = () => {
  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden hidden lg:block">
      <Image
        src="/casa-figueira/casa-figueira-master-plan.png"
        alt="Masterplan do Casa Figueira"
        fill
        className="object-cover object-center"
      />
    </div>
  );
};

const MasterplanMobile = () => {
  return (
    <div className="relative h-[460px] rounded-xl overflow-hidden block lg:hidden">
      <Image
        src="/casa-figueira/casa-figueira-master-plan.png"
        alt="Masterplan do Casa Figueira"
        fill
        className="object-contain object-center"
      />
    </div>
  );
};

export { MasterplanDesktop, MasterplanMobile };
