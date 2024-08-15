import React from "react";

function page({ params }: any) {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="text-4xl">
				{" "}
				hello{" "}
				<span className="text-4xl bg-red-600 p-3 rounded-lg   text-black">
					{" "}
					{params.id}
				</span>
			</div>
		</div>
	);
}

export default page;
