import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Team = () => {
  
  const teamMembers = [
    {
      name: "John Smith",
      des: "CEO & Founder",
      img: "../assets/team1.png",
    },
    {
      name: "Elina Williams",
      des: "Lead Developer",
      img: "https://s3-alpha-sig.figma.com/img/4316/c574/4cca8e430c2d9f50e72234abc8fd1c0c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jUnx4pEpHDP86AqX4C4LeBbKl8nTXgOiKUaNxSKbr91dmGAECOGF0g~XtM5ImutaSsJd6uuszDw6zkHHr9LZq9xxCL7wXDuuWUzvKfD33neNOFbKaeWBRVrQEG7X1VJy-lSViiTU32cI3RTOUogS5mpo8pAToaDB2F74Wn~IL34QElejmtey-mpAxJ2T2SCSBWohzJGGWNkpGO6wivCDR-cU13T34QGUq-tgRM5yNCRqOePc0wO7QJvwIBKs7zV1RjqLZpRYzrCobbRLnZfb9DL3A9EDchYioriZZ9D8Qq8IRu8hGJt0k0n52QegNVHBBVhf7F75LNBnsPB-S~WPhA__",
    },
    {
      name: "Michael Brown",
      des: "Product Manager",
      img: "https://s3-alpha-sig.figma.com/img/c5f0/f097/f060c63093179c9aa8c4ce86a8cac7f7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0TvWkMEpvzWqu3lgSFfn0Cql-W2UPXvIp37Eg58U~jiurGPZoGCpKF81agPfRd2xJ8yG~y9g4x4oOQHjnaklWF-GbwnZz6C5huv0JJd9YZ9u-yHY3pjm5QNg7c-jQY3v6IHQpR1OAY5SmH1i88J6qQQr62qN8I5GVr~qUEQREK9NcscfAE8IWVoqb8laxX99Er2y0bQGvBiJQkVtpKs~wa~Rx05-1MBUHqU4q5bDeeoe4z81IQKSZdU1QJUMM-6XF87IeSF-~y2Tihn7PGmJnO6Hbhuxj9deZLsCoC4sgF3o0VY8eA2pxvOhMe6lfREEUPRik9zSkRy2bDebXMJuQ__",
    },
  ];

  return (
    <div className="bg-white rounded-lg my-5 p-4 lg:p-6">
      <h2 className="text-2xl text-[#0F1629] font-semibold">Team</h2>
      <p className="text-[#3E424A] text-[16px] font-medium my-4 pt-2">
        Meet our amazing team! Each member brings their unique expertise to the
        table.
      </p>
      <div>
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            des={member.des}
            img={member.img}
          />
        ))}
      </div>
    </div>
  );
};

function Card({ name, img, des }) {
  return (
    <div className="md:flex bg-[#E8F4FD] rounded-lg py-4 md:px-8 my-6">
      <div className="flex flex-col items-center">
        <img
          className="rounded-xl w-44 lg:w-96"
          src={img}
          alt={`${name}'s profile`}
        />
        <h3 className="text-[#0F1629] text-[15px] font-semibold py-1">{name}</h3>
        <p className="text-[#788F9B] text-xs font-medium">{des}</p>
      </div>
      <div className="flex justify-center items-center px-4 ml-4 text-[#0F1629] text-sm font-normal">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu.
      </div>
    </div>
  );
}


Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};

export default Team;
