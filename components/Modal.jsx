const Modal = ({
    title,
    message,
    buttonLabel,
    onClick,
    secondaryButtonLabel,
    onSecondaryClick,
    showPrimaryButton = true,
    secondaryButton = false,
    iconSVG,
    bgColor = 'bg-red-100',
    textColor = 'text-red-600',
  }) => {
    return (
      <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[100%] lg:w-[30%] md:w-[40%]">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div
                    className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${bgColor} sm:mx-0 sm:h-10 sm:w-10`}
                  >
                    <div>{iconSVG}</div>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      {title}
                    </h3>
                    <div className="mt-2">
                      <p className={`text-sm ${textColor}`}>{message}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${secondaryButton || showPrimaryButton ? 'bg-gray-50' : 'bg-white' } px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6`}>
                {showPrimaryButton && (
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={onClick}
                  >
                    {buttonLabel}
                  </button>
                )}
                {secondaryButton && (
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={onSecondaryClick}
                  >
                    {secondaryButtonLabel}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;