import FORMAPI from "@/lib/api/forms/request";
import formStore from "@/lib/store/formStore";
import globalState from "@/lib/store/globalState";
export default function FileInput(props) {
  return (
    <input
      {...props}
      onChange={async (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files) || [];
        if (chosenFiles.length) {
          const file = chosenFiles[0];
          const { type, name } = file;
          const ext = name.split(".").pop();
          if (ext) {
            globalState.setState({ uploading: true });
            await FORMAPI.gererateFileURL({ ext }).then(async (res) => {
              const { presigned_url, object_key } = res?.data;
              await FORMAPI.uploadFileURL(presigned_url, file, type).then(
                () => {
                  formStore.setState({
                    [props.name]: object_key,
                  });
                }
              );
            });
            globalState.setState({ uploading: false });
          }
        }
      }}
    />
  );
}
