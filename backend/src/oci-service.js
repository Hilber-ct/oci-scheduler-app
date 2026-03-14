import common from "oci-common";
import core from "oci-core";

// O SDK busca automaticamente o arquivo em ~/.oci/config
const provider = new common.ConfigFileAuthenticationDetailsProvider();
const computeClient = new core.ComputeClient({ authenticationDetailsProvider: provider });

export async function alterarEstadoInstancia(instanceId, acao) {
    const actionRequest = acao.toUpperCase(); 
    return await computeClient.instanceAction({
        instanceId: instanceId,
        action: actionRequest
    });
}